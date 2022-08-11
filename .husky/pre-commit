#!/bin/bash

tsFiles=$(git diff --cached --name-only --diff-filter=d | grep -E '\.(ts|tsx)$');
if [[ ! -z $tsFiles ]]; then
	echo "Fixing ts files..."
    ./node_modules/.bin/eslint --color --fix $tsFiles
    git add $tsFiles
fi;
