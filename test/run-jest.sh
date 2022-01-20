#!/usr/bin/env bash

RED='\033[0;31m'
GREEN='\033[0;32m'
WHITE='\033[0m'

# First ensure that full-icu data is available
modulesPath="$(dirname "$(which node)")"/../lib/node_modules
fullIcuPath="$modulesPath/full-icu"

if [ ! -d "$fullIcuPath" ]
then
  echo "${GREEN}Attempting to globally install full-icu with npm for i18n unit tests...${WHITE}"
  echo "npm install -g full-icu"
  npm install -g full-icu
  echo ""
fi

if [ -d "$fullIcuPath" ]
then
  export NODE_ICU_DATA="$fullIcuPath"
fi

if [ -n "$NODE_ICU_DATA" ]
then
  # make sure dayjs is available
  if ! npm list -g | grep -q 'dayjs'
  then
    echo "${GREEN}Attempting to globally install dayjs with npm for unit tests...${WHITE}"
    echo "npm install -g dayjs@1"
    npm install -g dayjs@1
    echo ""
  fi
  # make global dayjs available to our specs
  export NODE_PATH=$modulesPath
  echo "${GREEN}Testing code that connects dayjs to any-date-parser...${WHITE}"
  # set timezone to UTC and run tests
  TZ=UTC npx jest "$@"
else
  # Failed
  echo "${RED}We failed to find the full-icu package path."
  echo "You need to:"
  echo "  1. Globally install i18n data using npm:"
  echo "     npm install -g full-icu"
  echo "  2. Export an environmental variable with the path to the full-icu directory."
  echo "     If your global node_modules folder was at /usr/lib/node_modules/full-icu"
  echo "     then you would run:"
  echo "     export NODE_ICU_DATA=/usr/lib/node_modules/full-icu"
  echo "${WHITE}"
  echo "Then you should be able to run 'npm test' again.";
  echo ""
fi
