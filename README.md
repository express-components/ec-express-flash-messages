# Express Flash Messages
A component to give the functionality of flash messages to an express app.

## Example
**File:** home.ejs
```ejs
<div>
  <% flashMessages.forEach(message => { %>
    <div class="alert alert-<%= message.type || 'default' %>">
      <%- message.content %>
    </div>
  <% }) %>
</div>
```

**File:** index.js
```js
const express = require('express')
const ejsLayouts = require('ec-ejs-layouts')

const app = express()

app.use(require('ec-express-flash-messages'))

app.get('/home', async function (req, res) {
  res.render('home')
})

app.get('/test-flash', async function (req, res) {
  res.flash('success', `Project <strong>${req.body.name}</strong> has been created successfully`)
  res.redirect('/home')
})

app.listen(8000, function () {
  console.log('Public app listening on port 8000!')
})
```
