import fs from 'fs'
import grpc from "@grpc/grpc-js"
import { usersService } from "./User.js"

const token = fs.readFileSync('token.txt', 'utf8')
const server = 'invest-public-api.tinkoff.ru:443'
const metadata = new grpc.Metadata()
metadata.add('Authorization', 'Bearer ' + token)
const metadataCreds = grpc.credentials.createFromMetadataGenerator(function(args, callback) {
	callback(null, metadata)
})

const ssl_creds = grpc.credentials.combineChannelCredentials(grpc.credentials.createSsl(), metadataCreds)

export const Api = {
	user: new usersService(server, ssl_creds)
}