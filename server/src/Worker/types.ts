export interface portMessage {
	port: number
	action: "capture" | "release"
}