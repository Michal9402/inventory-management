#!/bin/bash

# URL repozytorium i gałąź
REPO_URL="https://github.com/ed-roh/inventory-management"
BRANCH="master"
FOLDER_PATH="server/prisma/seedData"

# Tworzymy folder docelowy
mkdir -p seedData

# Pobieramy listę plików w folderze
FILES=$(curl -s https://api.github.com/repos/ed-roh/inventory-management/contents/$FOLDER_PATH?ref=$BRANCH | grep '"download_url"' | cut -d '"' -f 4)

# Pobieramy każdy plik z folderu
for FILE_URL in $FILES; do
    echo "Pobieram $FILE_URL"
    wget -q $FILE_URL -P seedData/
done

echo "Pobieranie zakończone."
