const ExpenseRow = ({ item, editId, editData, onChange, onEdit, onDelete, onSave }) => {
    const isEditing = editId === item.id;

    return (
        <tr>
            <td>
                {isEditing ? (
                    <input name="description" value={editData.description} onChange={onChange} />
                ) :
                    (
                        item.description
                    )}
            </td>
            <td>
                {isEditing ? (
                    <input name="category" value={editData.category} onChange={onChange} />
                ) :
                    (
                        item.category
                    )}
            </td>
            <td>
                {isEditing ? (
                    <input name="amount" value={editData.amount} onChange={onChange} />
                ) :
                    (
                        item.amount
                    )}
            </td>
            <td>
                {isEditing ? (
                    <input name="date" value={editData.date} onChange={onChange} />
                ) :
                    (
                        item.date
                    )}
            </td>
            <td>
                {isEditing ? (
                    <button type="button" onClick={onSave}>save</button>) : (<button type="button" onClick={() => onEdit(item)}>edit</button>)
                }
                <button type="button" onClick={() => onDelete(item.id)}>delete</button>

            </td>

        </tr>
    )
}

export default ExpenseRow;