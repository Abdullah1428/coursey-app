import { app } from './app.js'

// selecting port
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in on port ${PORT}`))
