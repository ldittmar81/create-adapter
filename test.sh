# Start npx in background and capture its PID
npx . &
pid=$!
# Wait 90s (just to be sure)
sleep 10
