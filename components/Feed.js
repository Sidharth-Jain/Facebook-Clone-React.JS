import Stories from './Stories';
import InputBox from './InputBox';
import Posts from './Posts';

function Feed() {
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
            <div className='mx-auto max-2-md md:max-w-lg lg:max-w-2xl'>
                <Stories />
                <InputBox/>
                <Posts />
            </div>
        </div>
    )
}

export default Feed
