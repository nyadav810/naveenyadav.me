/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns')
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

const client = new SNSClient({ region: process.env.REGION })

app.post('/contact', async function (req, res) {
  if (!req.body.name || !req.body.email || !req.body.message) {
    res.status(400).json({ message: 'Bad Request' })
    return
  }

  const { name, email, message } = req.body

  const command = new PublishCommand({
    TopicArn: process.env.FWD_CONTACT_SNS_TOPIC_ARN,
    Message: `New message from naveenyadav.me!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  })

  try {
    const data = await client.send(command)

    console.log(data)

    res.status(200).json({ message: 'Success' })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
