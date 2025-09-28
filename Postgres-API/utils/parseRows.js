export const parseRows = (rows) => {
    return rows.map(row => {
        const formattedRows = {};
        for(const key in row) {
            if(key === 'created_at') {
                formattedRows['createdAt'] = row[key];
            } else if(key === 'updated_at') {
                formattedRows['updatedAt'] = row[key];
            } else {
                formattedRows[key] = row[key];
            }
        }
        return formattedRows;
    })
}