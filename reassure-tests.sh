#!/usr/bin/env bash
set -e

BASELINE_BRANCH=${BASELINE_BRANCH:="master"}

# Required for `git switch` on CI
git fetch origin

# Gather baseline perf measurements
git switch "$BASELINE_BRANCH"
npm install --force
yarn reassure --baseline

# Gather current perf measurements & compare results
git switch --detach --force -
npm install --force
yarn reassure