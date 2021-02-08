import axios from "axios";
import cn from "classnames";
import { Button } from "components/button";
import { FormSelect } from "components/form-select";
import { GetStaticProps } from "next";
import Link from "next/link";
import Loading from "public/icons/loading.svg";
import React, { FC, useRef, useState } from "react";
import { FormCheckboxGroup } from "../../components";
import { Div } from "../../components/html-elements";

type GetTagsProps = {
  makes: { model_make_id: string }[]
  models: { model_name: string }[]
  trims: { model_trim: string, model_engine_fuel: string }[]
}

const defaultYears = [];
for (let i = 1990; i < 2022; i++) {
  defaultYears.push({ model_year: i });
}

const sortArray = (arr: string[]) => {
  return arr.sort((a, b) => {
    if (a.toLowerCase().trim() > b.toLowerCase().trim()) return 1;
    if (a.toLowerCase().trim() < b.toLowerCase().trim()) return -1;
    return 0;
  });
};

async function getModels(model_make_id) {
  return axios(`${process.env.NODE_ENV === `development`
                  ? `http://localhost:3000`
                  : `https://tellmann.co.za`}/api/ford-vw/getModels?make=${model_make_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  });
}

async function getMakes() {
  return axios(`${process.env.DOMAIN}/api/ford-vw/getMakes`, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  });
}

async function getYears(model_make_id, model_name) {
  return axios(`${process.env.NODE_ENV === `development`
                  ? `http://localhost:3000`
                  : `https://tellmann.co.za`}/api/ford-vw/getYears?make=${model_make_id}&model=${model_name}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
}

type CleanTrims = { model_trim: string, model_engine_fuel: string }

async function getCleanedTrims(model_make_id, model_name, year_start = `1990`, year_end = `2025`) {
  if (year_start === "all years") year_start = `1990`;
  if (year_end === "all years" || year_end === `current`) year_end = `2025`;
  
  const results = await axios(`${process.env.NODE_ENV === `development`
                                 ? `http://localhost:3000`
                                 : `https://tellmann.co.za`}/api/ford-vw/getTrims?make=${model_make_id}&model=${model_name}&year_start=${year_start}&year_end=${year_end}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return results.data.reduce((acc: [string[], CleanTrims[]], item: CleanTrims) => {
    if (!acc[0].includes(item.model_trim) && item.model_trim !== "") {
      acc[0].push(item.model_trim);
      acc[1].push(item);
    }
    
    return acc;
  }, [[], []])[1];
}

export const GetTags: FC<GetTagsProps> = ({ makes, models, trims }) => {
  
  const name = useRef(null);
  const carMakeRef = useRef(null);
  const carModelRef = useRef(null);
  const carFromYearRef = useRef(null);
  const carToYearRef = useRef(null);
  const website = useRef(null);
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formModels, setFormModels] = useState(models);
  const [currentFormMake, setCurrentFormMake] = useState("");
  const [currentFormModel, setCurrentFormModel] = useState("");
  const [formStartYears, setFormStartYears] = useState(defaultYears);
  const [currentToYear, setCurrentToYear] = useState(defaultYears);
  const [currentFromYear, setCurrentFromYear] = useState(defaultYears);
  const [formEndYears, setFormEndYears] = useState(defaultYears);
  const [formTrims, setFormTrims] = useState(trims);
  
  const updateFormData = async () => {
    if (carMakeRef.current.value !== currentFormMake) {
      const dbModels = await getModels(carMakeRef.current.value);
      setFormModels(dbModels.data);
      setCurrentFormMake(carMakeRef.current.value);
    }
    
    if (carModelRef.current.value !== currentFormModel) {
      const dbYears = await getYears(carMakeRef.current.value, carModelRef.current.value);
      const dbTrims = await getCleanedTrims(
        carMakeRef.current.value,
        carModelRef.current.value,
        carFromYearRef.current.value,
        carToYearRef.current.value
      );
      setFormStartYears(dbYears.data);
      setFormEndYears(dbYears.data);
      setFormTrims(dbTrims);
      setCurrentFormModel(carModelRef.current.value);
    }
    
    if (carToYearRef.current.value !== currentToYear) {
      const dbTrims = await getCleanedTrims(
        carMakeRef.current.value,
        carModelRef.current.value,
        carFromYearRef.current.value,
        carToYearRef.current.value
      );
      setFormTrims(dbTrims);
      setCurrentToYear(carToYearRef.current.value);
    }
    
    if (carFromYearRef.current.value !== currentFromYear) {
      const dbTrims = await getCleanedTrims(
        carMakeRef.current.value,
        carModelRef.current.value,
        carFromYearRef.current.value,
        carToYearRef.current.value
      );
      setFormTrims(dbTrims);
      setCurrentFromYear(carFromYearRef.current.value);
    }
  };
  
  
  const submitForm = async (e) => {
    e.preventDefault();
  };
  
  return <>
    <Div p={8} maxW={800} m="auto">
      <div className="card-form">
        <form id="contact" className="form" onSubmit={submitForm}>
          <main className={cn({ submitted })}>
            <div className="form-group form-group--grid">
              <FormSelect id="makes"
                          required
                          label="Make"
                          options={sortArray(makes.map(({ model_make_id }): string => model_make_id))}
                          onBlur={updateFormData}
                          onClick={updateFormData}
                          onChange={updateFormData}
                          ref={carMakeRef} />
              <FormSelect id="models"
                          required
                          label="Model"
                          options={["all models", ...sortArray(formModels.map(({ model_name }): string => model_name))]}
                          onBlur={updateFormData}
                          onClick={updateFormData}
                          onChange={updateFormData}
                          ref={carModelRef} />
              <FormSelect id="year_from"
                          label="From Year"
                          options={["all years", ...sortArray(formStartYears.map(({ model_year }): string => String(model_year)))]}
                          onBlur={updateFormData}
                          onClick={updateFormData}
                          onChange={updateFormData}
                          ref={carFromYearRef} />
              <FormSelect id="year_from"
                          label="To Year"
                          options={[
                            "all years",
                            "current",
                            ...sortArray(formEndYears.map(({ model_year }): string => String(model_year)))
                          ]}
                          onBlur={updateFormData}
                          onClick={updateFormData}
                          onChange={updateFormData}
                          ref={carToYearRef} />
            
            
            </div>
            <div className="form-group form-group--border">
              {formTrims.filter(({ model_engine_fuel }) => model_engine_fuel !== "Diesel").length > 0
               ? <FormCheckboxGroup label="Petrol" id="petrol"
                                    options={[
                                      `all`,
                                      ...sortArray(formTrims.filter(({ model_engine_fuel }) => model_engine_fuel !== "Diesel")
                                                            .map(({ model_trim }) => String(model_trim)))
                                    ]}
                                    onChange={updateFormData} />
               : null
              }
            </div>
            <div className="form-group">
              {
                formTrims.filter(({ model_engine_fuel }) => model_engine_fuel === "Diesel").length > 0
                ? <FormCheckboxGroup label="Diesel" id="diesel"
                                     options={[
                                       `all`,
                                       ...sortArray(formTrims.filter(({ model_engine_fuel }) => model_engine_fuel === "Diesel")
                                                             .map(({ model_trim }) => String(model_trim)))
                                     ]}
                                     onChange={updateFormData} />
                : null
              }
            
            </div>
            
          </main>
          <footer className="card-form__footer">{submitted
                                                 ? <p style={{ flex: 1 }}>Thank you for your Message.</p>
                                                 : <>
                                                   <p>You can also email us directly
                                                     at <Link href="mailto:info@tellmann.co.za">info@tellmann.co.za</Link></p>
                                                   <Button type="submit"
                                                           secondary
                                                           branded
                                                           medium><i className={cn({ submitting })}><Loading /></i><span className={cn(
                                                     { submitting })}>Submit</span></Button></>}
          </footer>
        </form>
      </div>
    </Div>
    <style jsx>{`

      main {
        max-height: 1800px;
        transition: max-height ease 0.4s 0s, padding ease 0.2s 0.2s;
        height: auto;
        padding: 24px;

        &.submitted {
          max-height: 0px;
          padding: 0 24px;
        }
      }

      .card-form {
        overflow: hidden;
        margin-bottom: auto;
        border-radius: 5px;
        background-color: var(--color-background);
        box-shadow: 0 30px 60px rgba(var(--color-text-rgb), 0.12);
      }

      footer {
        position: relative;
        z-index: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 24px;
        background-color: var(--primary);
        text-align: center;

        i {
          position: absolute;
          opacity: 0;
          display: flex;
          align-items: center;
          font-size: 26px;

          &.submitting {
            opacity: 1;
          }
        }

        span {
          opacity: 1;

          &.submitting {
            opacity: 0;
          }
        }

        p {
          font-size: 15px;
          font-weight: 500;
        }

        @media screen and (min-width: 600px) {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

        }
      }

      .form-group--grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
        grid-gap: 24px;
      }

      .form-group:not(:last-of-type) {
        margin-bottom: 24px;
      }

      .form-group--border {
        padding: 24px 0;
        border-top: var(--border);
        border-bottom: var(--border);
      }
    `}</style>
  </>;
};

export default GetTags;

export const getStaticProps: GetStaticProps = async () => {
  /*= =============== Get Makes form DB ================ */
  const makeData = await getMakes();
  const makes: { model_make_id: string }[] = makeData.data;
  
  /*= =============== Get Models from DB based on first make found ================ */
  const modelData = await getModels(makes[0].model_make_id);
  const models: { model_name: string }[] = modelData.data;
  
  /*= =============== Get models for all years available from DB based on first model found - no limitations ================ */
  const trims: { model_trim: string, model_engine_fuel: string }[] = await getCleanedTrims(makes[0].model_make_id,
    models[0].model_name);
  return {
    props: { makes, models, trims } // will be passed to the page component as props
  };
};
