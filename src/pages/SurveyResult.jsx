import { useSelector} from 'react-redux'


function SurveyResult() {
  const formDataList = useSelector((state) => state.form.formArray);

  if (formDataList.length === 0) {
    return <div>Belum ada data formulir yang disubmit.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Daftar Semua Data Formulir ({formDataList.length})</h2>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>No</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Nama</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Umur</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Jenis Kelamin</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Perokok</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Rokok yang Dicoba</th>
            </tr>
          </thead>
          <tbody>
            {formDataList.map((data, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{index + 1}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{data.name}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{data.age}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{data.gender === 'male' ? 'Laki-laki' : 'Perempuan'}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{data.isSmoking === 'yes' ? 'Ya' : 'Tidak'}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  {data.isSmoking === 'yes' && data.cigarettes.length > 0
                    ? data.cigarettes.join(', ')
                    : data.isSmoking === 'yes'
                    ? 'Tidak ada yang dipilih'
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default SurveyResult