#!/bin/bash
PORT=3000

echo "🔍 Looking for EmbraceIN processes..."

# Kill by port
PID=$(lsof -ti:$PORT 2>/dev/null)
if [ -n "$PID" ]; then
  echo "   Killing process PID $PID on port $PORT..."
  kill -9 "$PID" 2>/dev/null
  echo "   Stopped."
else
  echo "   No process found on port $PORT."
fi

# Also kill any orphaned vite/node processes that might have been started by start.sh
REMAINING=$(pgrep -f "vite" 2>/dev/null | head -5)
if [ -n "$REMAINING" ]; then
  echo "   Cleaning up remaining vite processes..."
  pkill -f "vite --port=$PORT" 2>/dev/null
fi

echo "✅ EmbraceIN stopped."