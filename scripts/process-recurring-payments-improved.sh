#!/bin/bash

# Recurring Payments Processing Script
# This script should be run every minute via cron

# Configuration
APP_URL="http://localhost:3000"
API_ENDPOINT="/api/recurring-payments-smart/process"
LOG_FILE="/Users/prathmeshranjan/Desktop/singularity1/logs/recurring-payments.log"

# Ensure the logs directory exists
mkdir -p "$(dirname "$LOG_FILE")"

# Function to log messages with timestamp
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

# Set PATH to include common locations for curl
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

log_message "Starting recurring payments processing..."

# Check if the application is running
if ! curl --output /dev/null --silent --head --fail "$APP_URL"; then
    log_message "ERROR: Application is not reachable at $APP_URL. Exiting."
    exit 1
fi

log_message "Application is reachable. Processing payments..."

# Make the API call
RESPONSE=$(curl -s -X POST "$APP_URL$API_ENDPOINT" -H "Content-Type: application/json")
CURL_STATUS=$?

if [ $CURL_STATUS -eq 0 ]; then
    log_message "API call successful. Response: $RESPONSE"
    
    # Parse the response to check for errors
    if echo "$RESPONSE" | grep -q '"success":true'; then
        log_message "Payments processed successfully"
    else
        log_message "WARNING: API returned success=false or error in response: $RESPONSE"
    fi
else
    log_message "ERROR: API call failed with status $CURL_STATUS. Response: $RESPONSE"
    exit 1
fi

log_message "Recurring payments processing completed."
