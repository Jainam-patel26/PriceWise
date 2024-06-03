"use client"
import React, { FormEvent } from 'react'
import {useState} from 'react'

const isValidAmazonProductURL = (url: string) => {
  try{
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.includes('amazon')
    ) {
      return true;
    } 
  } catch (error) {
    return false;
  }
  return false;
}

const Searchbar = () => {

    const[searchPrompt, setsearchPrompt] = useState('');
    const[isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const isValidLink = isValidAmazonProductURL(searchPrompt);

        if(!isValidLink){
          alert('Please enter a valid Amazon product link')
          return;
        }

        try{
          setIsLoading(true);
        } catch (error) {

        } finally {
          setIsLoading(false);
        }
    }

  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
        <input 
          type='text' placeholder='Enter product link' className='searchbar-input shadow-sm'
          value={searchPrompt}
          onChange={(e) => setsearchPrompt(e.target.value)}
        />
        <button type='submit' className='searchbar-btn' disabled={searchPrompt === ''}> 
          {isLoading ? 'Loading...' : 'Search'} 
        </button>
    </form>
  )
}

export default Searchbar
