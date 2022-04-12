# Static Web App

## Run it:
`swa start build --host 0.0.0.0`
... or F1 -> "Run Task" -> "run"

Would probably be better to change it to use some kind of npm/serve thing with a dev server so it can hot rebuild/reload

That "host" thing is to make sure it can respond to both localhost and 127.0.0.1 from your machine *and* be available to other docker images, if required. `0.0.0.0` means "all network interfaces".