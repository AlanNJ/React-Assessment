export interface TableData {
	id?: number;
	age: number;
	name: string;
	occupation: string;
}
export interface IResturant {
	name: string;
	address: string;
	reviews: string[];
	description: string;
	image: string;
	_id: string;
}
export interface IAddComment {
	comment: string;
	setComment: (i: string) => void;
	addComment: () => void;
}
