### Cockpit Setting

I refer just important points. I use Docker to test in local.

- Run Docker container of Cockpit
    - `docker run -d --name cockpit -p 8080:80 --network jenkins agentejo/cockpit`
    - Remember to make Cockpit join jenkins network
- Log in Cockpit after accessing to `COCKPIT_URL/install`
- Add collection named 'Log'
- Create fields in Log collection
    - Title: Text
    - Date: Date
    - Content: Markdown
- Generate API Key for fetching entries from Cockpit
    - Go to SETTINGS > API ACCESS
    - You can fetch Log entries accessing URL like
        - `http://COCKPIT_URL/api/collections/get/Log?token=${Token}`
- Create Webhook to inform Jenkins of update of the site
    - Go to SETTINGS > WEBHOOKS
    - Set Jenkins webhook trigger URL for URL
        - `http://JENKINS_URL/generic-webhook-trigger/invoke`
    - Fill in custom headers if you set token on Jenkins
    - Add Events so as to decide when to send webhook, here are in my case
        - collections.remove.after
        - collections.save.after   
