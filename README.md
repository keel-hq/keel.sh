---
home: true
heroImage: ./img/logo_small.png
actionText: Get Started →
actionLink: /docs/
features:
- title: Don't do it by hand, ever
  details: kubectl is the new SSH. If you are using it to update production workloads, you are doing it wrong. See examples on how to automate application updates. 
- title: Open Source & Self-Hosted
  details: Single command, no dependencies. No lock-in, no custom configuration files. Start using now. 
- title: No CLI/API required
  details: Runs as a single container, no database required. Policies and trigger types are specified in your application deployment files or Helm charts. 
footer: Apache 2 Licensed | Copyright © 2017-present AppScension Ltd
---


## Easy as 1, 2, 3

1. Deploy Keel into your cluster, installation instructions can be found [TODO]

2. Modify your deployment manifest with policy annotations:

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata: 
  name: wd
  namespace: default
  labels: 
    name: "wd"
  annotations:
    keel.sh/policy: minor # <-- policy name according to https://semver.org/
    keel.sh/trigger: poll # <-- actively query registry, otherwise defaults to webhooks
spec:
  replicas: 1
  template:
    metadata:
      name: wd
      labels:
        app: wd        
    spec:
      containers:                    
        - image: karolisr/webhook-demo:0.0.8
          imagePullPolicy: Always            
          name: wd
          command: ["/bin/webhook-demo"]
          ports:
            - containerPort: 8090
```

> TODO: link to policies

That's it, third step is automated, Keel will do it. Once you deploy it, Keel will be looking for new versions and automatically updating your resource once a new image is available.

## Admin Dashboard

Keel has an optional, easy to use web UI for quick policy updates, approval management and audit logs:

![Keel Web UI](/img/keel_ui.png)

## Policy Driven Updates

Use policies to define when you want your application to be updated. Providers can have different mechanisms of getting configuration for your application, but policies are consistent across all of them. Following [semver.org](http://semver.org/) 
best practices allows you to safely automate application updates.

Available policies:

-  **all**: update whenever there is a version bump or a new prerelease created (ie: `1.0.0` -> `1.0.1-rc1`)
-  **major**: update major & minor & patch versions
-  **minor**: update only minor & patch versions (ignores major)
-  **patch**: update only patch versions (ignores minor and major versions)
-  **force**: force update even if tag is not semver, ie: `latest`, optional label: **keel.sh/match-tag=true** which will enforce that only the same tag will trigger force update.
-  **glob**: use wildcards to match versions, example:


## Approvals

Users can specify on their Kubernetes manifests or Helm charts how many approvals do they have to collect before a resource gets updated. Approvals can be collected through the web admin dashboard, HTTP API, Slack and HipChat. 