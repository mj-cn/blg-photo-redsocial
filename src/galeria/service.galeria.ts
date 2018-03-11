import { IProps } from './photo'


export async function getPhoto(): Promise<Array<IProps>> {
    let response: Response;
    let data: any;
    try {
        response = await fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=2965609981.88aee3f.a35d30e052504b0ab24ad82dbcb2ddbf");
    } catch{
        return [];
    }
    if (response.ok && response.status == 200) {
        let contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            data = await response.json();
            return mapData(data.data);
        }
    }
    return [];
}


function mapData(data: Array<any>): Array<IProps> {
    let result: Array<IProps> = []
    data.forEach((data) => {
        if (data.type != "image") return;
        result.push({
            like: data.likes.count,
            comment: data.comments.count,
            link: data.link,
            image: data.images.low_resolution.url
        })
    })
    return result;
}