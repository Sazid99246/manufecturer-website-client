import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div className='my-10'>
            <h2 className='text-4xl text-center font-bold text-primary'>About Me</h2>
            <ol className='list-decimal px-10'>
                <li className='py-2'><b>Name: </b>Sheikh MD Sazidul Islam</li>
                <li className='py-2'><b>Email: </b>shikhmdsazidulislam@gmail.com</li>
                <li className='py-2'><b>Education: </b>
                    <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Examination</th>
                                    <th>Institution</th>
                                    <th>GPA/CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2021</td>
                                    <td>HSC</td>
                                    <td>Adamjee Cantonment College</td>
                                    <td>4.58</td>
                                </tr>
                                <tr>
                                    <td>2019</td>
                                    <td>SSC</td>
                                    <td>Dakshin Kafrul Model High School</td>
                                    <td>3.56</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li className='py-2'><b>List of skills I have as a web developer</b>
                    <ul className='list-decimal px-4'>
                        <li>HTML & HTML5</li>
                        <li>CSS & CSS3</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>Git & Github</li>
                        <li>Javascript</li>
                        <li>ES6</li>
                        <li>API</li>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Firebase Authentication</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                    </ul>
                </li>
            </ol>
            <p className='px-8'>
                <b>Here are some of my web-development projects</b>
            </p>
            <ul className=' list-disc px-10'>
                <li className='link'><Link to='https://sazid99246.github.io/mission-2022/'>Mission 2022</Link></li>
                <li className='link'><Link to='https://affectionate-benz-33d0d1.netlify.app/'>My Personal Bugdet</Link></li>
                <li className='link'><Link to='https://scintillating-dango-468dda.netlify.app/'>PC Component Shop</Link></li>
            </ul>
        </div>
    );
};

export default MyPortfolio;