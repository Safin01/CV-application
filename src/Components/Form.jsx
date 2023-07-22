import { useState } from "react";
import "./Form.css"

function Form(){
    const [createCv, setCreateCv] = useState(true);
    const [profile, setProfile] = useState({
        name:"",
        age:0,
        adress:"",
        phone:"",
    })
    
    const [education, setEducation] = useState({
        schoolName:"",
        schoolYear:"",
        collgeName:"",
        collgeYear:"",
    })

    const [experience, setExperience] = useState({
        company:"",
        year:"",
        position:"",
    })

    function handleSubmit(e){
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());

        console.log(formJson);
        setCreateCv(false);
       
    }
    const handleReset = () => {
        setProfile({
          name: "",
          age: 0,
          address: "",
          phone: "",
        });
        setEducation({
          schoolName: "",
          schoolYear: "",
          collgeName: "",
          collgeYear: "",
        });
        setExperience({
          company: "",
          year: "",
          position: "",
        });
      };
    console.log(createCv);
    // console.log(formJson);

    return(
        <>
        {createCv && <form method="post" onSubmit={handleSubmit}>
            <div className="profile">
                <h2>Profile</h2>
                <label>
                    Name: {" "}
                    <input 
                    name="name"
                    value={profile.name}
                    onChange={(e) => setProfile({
                        ...profile,
                        name: e.target.value
                    })}
                    />
                    <br />
                </label>
                <label>
                    Age: {" "}
                    <input 
                    name="age"
                    value={profile.age}
                    type="number"
                    onChange={(e) => setProfile({
                        ...profile,
                        age: e.target.value
                    })}
                    />
                    <br />
                </label>
                <label>
                    Adress: {" "}
                    <input 
                    name="adress"
                    value={profile.adress}
                    type="string"
                    onChange={(e) => setProfile({
                        ...profile,
                        adress: e.target.value
                    })}
                    />
                    <br />
                </label>
                <label>
                    Phone: {" "}
                    <input 
                    name="phone"
                    value={profile.phone}
                    type="string"
                    onChange={(e) => setProfile({
                        ...profile,
                        phone: e.target.value
                    })}
                    />
                </label>             
            </div>
            
            <div className="education">
                <h2>Education</h2>
                <label>
                    School Name: {" "}
                    <input 
                    name="schoolName"
                        value={education.schoolName}
                        onChange={(e) => setEducation({
                            ...education,
                            schoolName: e.target.value
                        })}
                    />
                    <br />
                </label>
                <label>
                    School Year: {" "}
                    <input 
                    name="schoolYear"
                        type="date"
                        value={education.schoolYear}
                        onChange={(e) => setEducation({
                            ...education,
                            schoolYear: e.target.value
                        })}
                    />
                    <br />
                </label>
                <label>
                    Collge Name: {" "}
                    <input 
                    name="collgeName"
                        value={education.collgeName}
                        onChange={(e) => setEducation({
                            ...education,
                            collgeName: e.target.value
                        })}
                    />
                    <br />
                </label>
                <label>
                    College Year: {" "}
                    <input 
                    name="collegeYear"
                    type="date"
                        value={education.collgeYear}
                        onChange={(e) => setEducation({
                            ...education,
                            collgeYear: e.target.value
                        })}
                    />
                    <br />
                </label>                
            </div>

            <div className="experience">
                <h2>Experience</h2>
                <label>
                    Company: {" "}
                    <input 
                    name="companyName"
                    value={experience.company}
                    onChange={(e) => setExperience({
                        ...experience,
                        company: e.target.value
                    })}
                    />
                    <br />
                </label>
                <label>
                    Company Year: {" "}
                    <input 
                    type="date"
                    name="companyYear"
                    value={experience.year}
                    onChange={(e) => setExperience({
                        ...experience,
                        year: e.target.value
                    })}
                    />
                    <br />
                </label>
                <label>
                    Position: {" "}
                    <input 
                    name="companyposition"
                    value={experience.position}
                    onChange={(e) => setExperience({
                        ...experience,
                        position: e.target.value
                    })}
                    />
                    <br />
                </label>
            </div>


            <button type="submit" >Submit</button>
            {" "}
            <button type="reset" onClick={handleReset}>Reset</button>
        </form>}

        {!createCv ?(
            <button onClick={() =>{ setCreateCv(true), handleReset()}}>Create CV</button>
        ):null}

        {" "}
        {!createCv && 
        <div className="cv-application">
            <div className="CV">
                <div className="profile">   
                <h2>Profile</h2>
                <p>Name: {profile.name}</p>
                <p>Age: {profile.age}</p>
                <p>Adress: {profile.adress}</p>
                <p>Phone: {profile.phone}</p>
            </div>
            <hr></hr>
            </div>
            <div className="CV">
                <div className="education">   
                <h2>Education</h2>
                <p>School Name: {education.schoolName}</p>
                <p>School Year: {education.schoolYear}</p>
                <p>College Name: {education.collgeName}</p>
                <p>College Year: {education.collgeYear}</p>
            </div>
            <hr></hr>
            </div>
            <div className="CV">
                <div className="experience">   
                <h2>Experience</h2>
                <p>Company Name: {experience.company}</p>
                <p>Company Year: {experience.year}</p>
                <p>Company Position: {experience.position}</p>
            </div>
            <hr></hr>
            </div>
        </div>
        }
        </>
    )
}

export default Form; 