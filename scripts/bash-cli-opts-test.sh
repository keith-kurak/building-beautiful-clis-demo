#!/bin/bash

# while slot 1 is not empty
while test -n "$1"; do
    case "$1" in
      -a|--aparam)
          aparam=$2
          shift 2
          ;;
      -b|--bparam)
          bparam=$2
          shift 2
          ;;
      -c|--cparam)
          cparam=$2
          shift 2
          ;;
      -h|--help)
          echo "Usage:"
          echo "  optstest [-a aparam] [-b bparam] [-c cparam]"
          echo
          echo "Options:"
          echo "  -a, --aparam APARAM        Sets the A parameter"
          echo "  -b, --bparam APARAM        Sets the B parameter"
          echo "  -c, --cparam CPARAM        Sets the C parameter"
          exit 0
          ;;
      -?*)
          echo "Error: unknown option: $1" >&2
          exit 1
          ;;
    esac
done

ECHO "Will execute script with the following parameters:"
ECHO "A: $aparam"
ECHO "B: $bparam"
ECHO "C: $cparam"