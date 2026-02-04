import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addFormData} from "../redux/slice/formSlice";
import { useNavigate } from "react-router-dom";

function Form() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      isSmoking: "",
      cigarettes: "",
    },
  });
 
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    console.log("data nya adalah", data);
    dispatch(addFormData(data));
    navigate('/result');
    alert("Data berhasil disimpan");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center justify-center h-screen w-full gap-2">
        <h1>Form Survey Perokok</h1>
        <label>Siapa nama Anda?</label>
        <input {...register("name", { required: true })} />
        <label>Berapa umur Anda?</label>
        <input {...register("age", { required: true })} />
        <label>Apa jenis kelamin Anda?</label>
        <div className="flex flex-row gap-4">
          <input
            type="radio"
            id="male"
            value="male"
            {...register("gender", { required: "Please select a gender" })}
          />
          <label htmlFor="laki-laki">laki-laki</label>
          <input
            type="radio"
            id="female"
            value="female"
            {...register("gender", { required: "Please select a gender" })}
          />
          <label htmlFor="perempuan">Perempuan</label>
        </div>
        <label>Apakah Anda perokok?</label>
        <div className="flex flex-row gap-2">
          <input
            type="radio"
            id="yes"
            value="yes"
            {...register("isSmoking", { required: "Please select" })}
          />
          <label htmlFor="yes">yes</label>
          <input
            type="radio"
            id="no"
            value="no"
            {...register("isSmoking", { required: "Please select" })}
          />
          <label htmlFor="no">no</label>
        </div>
        <label>Jika anda Perokok, rokok apa yang Anda pernah coba?</label>
        <div className="flex flex-row gap-2" >
          <input
            type="checkbox"
            id="gudang-garam"
            value="gudang-garam"
            {...register("cigarettes")}
          />
          <label htmlFor="gudang-garam">gudang-garam</label>
          <input
            type="checkbox"
            id="lucky-strike"
            value="lucky-strike"
            {...register("cigarettes")}
          />
          <label htmlFor="cigarettes">lucky-strike</label>
          <input
            type="checkbox"
            id="marlboro"
            value="marlboro"
            {...register("cigarettes")}
          />
          <label htmlFor="marlboro">marlboro</label>
          <input
            type="checkbox"
            id="esse"
            value="esse"
            {...register("cigarettes")}
          />
          <label htmlFor="esse">esse</label>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
