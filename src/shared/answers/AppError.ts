export class AppError {
	public readonly status = 'error';
	public readonly message: string;
	public readonly data?: any;

	constructor(data: { message: string; data?: any }) {
		this.message = data.message;
		this.data = data.data;
	}
}
