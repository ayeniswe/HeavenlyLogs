#!/bin/bash
dockerEnv() {
    populateMongoDB() {
        populate_container_name="${app_prefix}-populate-db"
        container_name="${app_prefix}-mongodb"
        script_dir="./init.js"
        # Populate DB
        sleep 1 # Wait for server to be ready
        docker exec ${populate_container_name} mongosh mongodb://${container_name} --file ${script_dir} > /dev/null \
        &&
        docker rm -f ${populate_container_name} > /dev/null
    }

    # Set app prefix
    if $1 == "true"; then
        app_prefix=$2
        # Start docker containers
        docker-compose up -d
        # docker-compose up --build -d
        # Remove dangling images
        docker system prune -f > /dev/null
        populateMongoDB ${app_prefix}
    else
        docker-compose down
    fi
}

start() {
    app_prefix=$1
    # Start docker environment
    dockerEnv true ${app_prefix}
}
stop() {
    # Stop docker environment
    dockerEnv false
}

# Help
show_help() {
  echo "Usage: start.sh [options]"
  echo "Starts or stops the application. If the application is not running, it will be started. If it is running, it will be stopped."
  echo "Example usage: ./start.sh <app_prefix> Example: <aws>-populate-db"
  echo "Options:"
  echo "  -h, --help    Show help"
  echo "  <app_prefix>  App prefix"
}

if [ $# -ne 1 ]; then
    echo "Error: Incorrect number of arguments."
    echo "Usage: ./start.sh <app_prefix> Example: <aws>-populate-db"
    exit 1
fi

while getopts ":h-" opt; do
  case $opt in
    h|--help)
      show_help
      exit 0
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      show_help
      exit 1
      ;;
  esac
done

# Entry point
app_prefix=$1
containers=$(docker ps | grep -e "${app_prefix}-" | awk '{print $1}')
if [[ -n "$containers" ]]; then
    echo "Stopping app..."
    stop
else
    echo "Starting app..."
    start ${app_prefix}
fi