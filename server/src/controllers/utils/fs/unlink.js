import fs from "fs";

export default function unlinkSyncFs(archive){
    return(fs.unlinkSync(archive))
}