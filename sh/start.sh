#!/bin/bash
PORT=3000

echo "🔍 Checking for existing process on port $PORT..."
PID=$(lsof -ti:$PORT 2>/dev/null)
if [ -n "$PID" ]; then
  echo "   Killing existing process PID $PID on port $PORT..."
  kill -9 "$PID" 2>/dev/null
  echo "   Done."
fi

echo "🚀 Starting EmbraceIN dev server..."
cd "$(dirname "$0")/.."
pnpm dev &
SERVER_PID=$!

# Wait for the server to be ready
echo "   Waiting for server..."
for i in $(seq 1 30); do
  if lsof -ti:$PORT 2>/dev/null | head -1 > /dev/null 2>&1; then
    break
  fi
  sleep 1
done

echo "🌐 Opening http://localhost:$PORT/Embracein/ in browser..."
open "http://localhost:$PORT/Embracein/"

echo "✅ EmbraceIN is running at http://localhost:$PORT/Embracein/"
echo "   Server PID: $SERVER_PID"
echo "   To stop: ./sh/stop.sh"