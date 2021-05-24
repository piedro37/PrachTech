
/** om backup te nemen van firestore collections (omdat dat dat niet gaat in de console) */
export const downloadJson = ({data, name}) => {
    let a = document.createElement('a')
    a.href  = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    a.download = `${name}.json`
    a.click()

}