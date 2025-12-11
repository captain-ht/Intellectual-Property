export interface Photo {
	id?: string;
	src: string;
	alt?: string;
	title?: string;
	description?: string;
	thumbnail?: string;
	width?: number;
	height?: number;
	tags?: string[];
	date?: string;
	location?: string;
	camera?: string;
	lens?: string;
	settings?: string;
}

export interface AlbumGroup {
	id: string;
	title: string;
	description: string;
	cover: string;
	date: string;
	location: string;
	tags: string[];
	layout: string;
	columns: number;
	photos: Photo[];
}
