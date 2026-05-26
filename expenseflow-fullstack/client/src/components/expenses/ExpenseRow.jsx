import { MdOutlineModeEdit } from "react-icons/md";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

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
            <td className="btn-fld">
                {isEditing ? (
                    <button type="button" onClick={onSave}>{<IoSaveOutline size={18}/>}</button>) : (<button type="button" onClick={() => onEdit(item)}>{<MdOutlineModeEdit size={18}/>}</button>)
                }
                <button type="button" onClick={() => onDelete(item.id)}>{<RiDeleteBin6Line color="red" size={18}/>}</button>

            </td>

        </tr>
    )
}

export default ExpenseRow;