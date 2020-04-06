### Tips on Docker Networking

- For Jenkins, I created docker network named jenkins
- Now I have three containers in the same network 'jenkins'
    1. jenkins-docker
    1. jenkins-blueocean
    1. mycockpit
- If you need to access another container from inside a container, you can request URL such as
    1. `http://jenkins-blueocean:8080`
    1. `http://mycockpit:80`
- Keep in mind those ports are virtual machine's ports, not host's ports
- In addition, be careful when you access another container from inside a Jenkins agent container
    - So as to use the network 'jenkins' from the node.js container, use host(jenkins-blueocean) network
