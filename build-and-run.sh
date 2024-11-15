docker-compose build apollo-server
docker-compose up -d apollo-server

# Wait for the health check to pass
echo "Waiting for Apollo Server to be healthy..."
while true; do
  curl -f http://localhost:4000/health > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    echo "Apollo Server is now up and running!"
    break
  fi
  echo "Waiting..."
  sleep 2
done

docker-compose build webapp-nextjs
docker-compose up webapp-nextjs
