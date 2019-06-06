---
title: Examples
lang: en-US
meta:
  - name: description
    content: template examples
  - name: keywords
    content: kubernetes template manifest example
---

# Examples


- [Default to latest semver tag ](/examples/#latest-docker-semver-tag)
- [Defaults](/examples/#default)
- [Pipelines](/examples/#pipelines)
- [Operators - equal/not qual/and or](/examples/#operators-equal-not-qual-and-or)
- [If/else](/examples/#flow-control-if-else)

### Latest Docker semver tag

Here's a simplified example of an application which can be pulled from DockerHub:

<<< @/.vuepress/public/examples/keel-example.yaml

Users can use several query arguments such as `version` and `port`. If user doesn't specify those values, Sunstone will:

1. Get the latest semver Docker tag from keelhq/push-workflow-example
2. Set default ports

Generated template will look like:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata: 
  name: pushwf  
  labels: 
    name: "pushwf"
spec:
  replicas: 1
  revisionHistoryLimit: 5
  selector:
    matchLabels:
      app: pushwf
  template:
    metadata:
      name: pushwf
      labels:
        app: pushwf
    spec:     
      containers:                    
        - image: keelhq/push-workflow-example:0.11.0-alpha
          imagePullPolicy: Always
          name: pushwf
          ports:
            - containerPort: 8500
          livenessProbe:
            httpGet:
              path: /
              port: 8500
            initialDelaySeconds: 10
            timeoutSeconds: 5    
```


### Default

One function frequently used in templates is the default function. This function allows you to specify a default value inside of the template, in case the value is omitted. Example below:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: hello-world
spec:
  restartPolicy: Never
  containers:
  - name: hello
    image: ubuntu:{{ .tag | default "xenial" }}
    command: ["/bin/echo", "hello", "world"]
```

Now, if don't specify any value, it will:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: hello-world
spec:
  restartPolicy: Never
  containers:
  - name: hello
    image: ubuntu:xenial
    command: ["/bin/echo", "hello", "world"]
```

Otherwise, you can override this by supplying `?tag=trusty` value.

### Pipelines

One of the powerful features of the template language is its concept of pipelines. Drawing on a concept from UNIX, pipelines are a tool for chaining together a series of template commands to compactly express a series of transformations. In other words, pipelines are an efficient way of getting several things done in sequence. Let’s write an example using a pipeline.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: configmap
data:
  myvalue: "Hello World"
  drink: {{ .drink | quote }}
  food: {{ .food | upper | quote }}
  secret: {{ .secret | b64enc }}
```

Now, if we pass it through sunstone.dev such as `https://sunstone.dev/xxx/pipeline-example.yaml?drink=coconut-water&food=chops&secret=very-secret`:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: configmap
data:
  myvalue: "Hello World"
  drink: "coconut-water"
  food: "CHOPS"
  secret: dmVyeS1zZWNyZXQ=
```

### Operators - equal/not qual/and or

Operators are implemented as functions:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: hello-world
spec:
  restartPolicy: Never
  containers:
  - name: hello
    image: ubuntu:{{ .tag | default "xenial" }}
    command: ["/bin/echo", "hello", "world"]
  {{ if and .fooString }} 
    {{ if (eq .fooString "foo") }}
  - name: hello
    image: ubuntu:{{ .sidecarTag  }}
    command: ["/bin/echo", "hello", "world"]
    {{ end }}
  {{ end }}
```

Available operators:

- eq
- ne
- lt 
- gt
- and
- or 
- not

### Flow control - if/else

Control structures (called “actions” in template parlance) provide you, the template author, with the ability to control the flow of a template’s generation. Helm’s template language provides the following control structures:

- **if/else** for creating conditional blocks
- **with** to specify a scope
- **range** which provides a “for each”-style loop


```yaml
apiVersion: v1
kind: Pod
metadata:
  name: hello-world
spec:
  restartPolicy: Never
  containers:
  - name: hello
    image: ubuntu:{{ .tag | default "xenial" }}
    command: ["/bin/echo", "hello", "world"]
  {{ if .sidecar }}
  - name: hello
    image: ubuntu:{{ .sidecarTag  }}
    command: ["/bin/echo", "hello", "world"]
  {{ end }}
```

Now, you can supply `?sidecar=true&sidecarTag=foo` to generate full template with the sidecar.