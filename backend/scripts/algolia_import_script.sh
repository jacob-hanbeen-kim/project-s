#!/bin/bash
LOCATION=us-central1\
    PROJECT_ID=project-s-backend\
    ALGOLIA_APP_ID=4HRSAU1M6D\
    ALGOLIA_API_KEY=5239e8618e6ef8a417bf6a213ce2ec96\
    ALGOLIA_INDEX_NAME=profile\
    COLLECTION_PATH=users/{user_id}/profile\
    GOOGLE_APPLICATION_CREDENTIALS=/Users/seunghunjang/Documents/PersonalProjects/ProjectS/project-s/backend/functions/ServiceAccountKey.json\
    npx firestore-algolia-search

# Remember to switch to the correct ALGOLIA_INDEX_NAME, COLLECTION_PATH, and GOOGLE_APPLICATION_CREDENTIALS before you run this script.
# Run this bash script in this folder using below command to sync Algolia index with Firestore collection.
# "bash algolia_import_script.sh"

# You would need to have "npx" installed.