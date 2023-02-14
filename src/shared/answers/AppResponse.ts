export class AppResponse {
	public readonly status = 'success';
	public readonly message?: string;
	public readonly data?: any;

	constructor(data: { message?: string; data?: any }) {
		this.message = data.message;
		this.data = data.data;
	}
}
