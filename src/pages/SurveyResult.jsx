import React from 'react'
import { useSelector } from 'react-redux'
function SurveyResult() {

  const formData = useSelector((state) => state.form.formData);

  if (!formData) {
    return <div>Belum ada data formulir yang disubmit.</div>;
  }

  console.log("data nya adalah", formData);
  return (
    <div>
      <h2>Ringkasan Data Formulir</h2>
      <p>Nama: {formData.name}</p>
      <p>Umur: {formData.age}</p>
      <p>Jenis Kelamin: {formData.gender}</p>
      <p>Perokok: {formData.isSmoking === 'yes' ? 'Ya' : 'Tidak'}</p>
      {formData.isSmoking === 'yes' && formData.cigarettes.length > 0 && (
        <p>Rokok yang pernah dicoba: {formData.cigarettes.join(', ')}</p>
      )}
       {formData.isSmoking === 'yes' && formData.cigarettes.length === 0 && (
        <p>Rokok yang pernah dicoba: Tidak ada yang dipilih</p>
      )}
    </div>
  )
}

export default SurveyResult
