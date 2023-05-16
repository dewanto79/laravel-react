import { PlusCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import { useEffect } from 'react';
import axiosClient from '../axios';
import TButton from '../components/core/TButton';
import PageComponent from '../components/PageComponent'
import PaginationLinks from '../components/PaginationLinks';
import { useStateContext } from '../contexts/ContextProvider'
import SurveyListItem from './SurveyListItem'
import router from '../router'

export default function Surveys() {
  const { showToast } = useStateContext();
  const [surveys, setSurveys] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);

  const onDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this survey')) {
      axiosClient.delete(`/survey/${id}`)
        .then(() => {
          getSurveys();
          showToast(`The survey has been deleted`)
        })
    }

  }

  const onPageClick = (link) => {
    getSurveys(link.url);
  }

  const getSurveys = (url) => {
    url = url || '/survey';

    setLoading(true);
    axiosClient.get(url)
      .then(({ data }) => {
        setSurveys(data.data);
        setMeta(data.meta);
        setLoading(false);
      });
  }

  useEffect(() => {
    getSurveys();
  }, [])
  return (
    <PageComponent
      title="Surveys"
      buttons={(
        <TButton color='green' to='/surveys/create'>
          <PlusCircleIcon className='h-6 w-6 mr-2' />
          Create new
        </TButton>
      )}>
      {loading && <div className='py-8 text-xl text-center'>Loading the page ...</div>}
      {!loading && (
        <div>
          {surveys.length === 0 &&
            <div className='py-8 text-center items-center text-gray-500 text-2xl'>You don't have any survey created</div>
          }
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
            {surveys.map((survey) => (
              <SurveyListItem survey={survey} key={survey.id} onDeleteClick={onDeleteClick} />
            ))}
          </div>
          {surveys.length > 0 &&
            <PaginationLinks meta={meta} onPageClick={onPageClick} />
          }
        </div>
      )}
    </PageComponent>
  )
}
