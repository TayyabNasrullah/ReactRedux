import React from "react";
import { Link } from "react-router-dom";

import "./FullResultPage.css";

class FullResultPage extends React.Component {
  render() {
    //  console.log(this.props);
    let suggestions1 = this.props.location.suggestions;

    //  console.log(suggestions1);

    return (
      <div className="table">
        {suggestions1.map(suggestion => (
          <div key={suggestion.id._text}>
            <li className="td">
              <Link
                to={{
                  pathname: "/BookDetailPage",
                  suggestions: suggestion
                }}
                onClick={() => suggestion}
              >
                <img
                  src={suggestion.best_book.small_image_url._text}
                  alt="img"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>{suggestion.best_book.title._text}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                  by:<b>{suggestion.best_book.author.name._text}</b>
                </span>
              </Link>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

export default FullResultPage;
// 18-12-2019
// return (
//    <div>
//       <h1 id='title'>React Dynamic Table</h1>
//       <table id='students'>
//          <tbody>
//             {/* <tr>{this.renderTableHeader()}</tr> */}
//             {this.renderTableData()}
//          </tbody>
//       </table>
//    </div>
// )

//  state = {
//    students: [
//       { id: 1, bookTitle: 'Math', auther:'Tayyab' },
//          { id: 2, bookTitle: 'Math', auther:'Tayyab' },
//          { id: 3, bookTitle: 'Math', auther:'Tayyab' },
//          { id: 4, bookTitle: 'Math', auther:'waqas' },
//          { id: 5, bookTitle: 'Math', auther:'Tayyab' },
//          { id: 6, bookTitle: 'Math', auther:'Tayyab' },
//          { id: 7, bookTitle: 'Math', auther:'Tayyab' },
//          { id: 8, bookTitle: 'Math', auther:'Tayyab' },
//          { id: 9, bookTitle: 'Math', auther:'Tayyab' },
//          { id: 10, bookTitle: 'Math', auther:'Tayyab' },

//    ]
//  }

//  renderTableData=()=> {
//    let suggestions1 = this.props.suggestions;

//    console.log(suggestions1);
//    if (suggestions1.length === 0) {
//      return null;
//    } else
//    return(
//       <ul className="suggestions">
//          {suggestions1.map(suggestion => (
//            <div key={suggestion.id._text}>
//              <li>

//                  <img src={suggestion.small_image_url._text} />
//                  &nbsp;&nbsp;&nbsp;&nbsp;
//                  <span className="span">{suggestion.title._text}</span>
//                  &nbsp;&nbsp;&nbsp;&nbsp;
//                  <span className="span">
//                    by:<b>{suggestion.author.name._text}</b>
//                  </span>
//              </li>
//            </div>
//          ))}

//        </ul>
//    )}
//  students.map((student, index) => {
// const { id, bookTitle, auther } = student //destructuring
//       return (
//          <tr key={id}>
//             <td>{id}</td>
//             <td>{bookTitle}</td>
//             <td>{auther}</td>
//          </tr>
//       )
//    })
// }

//  renderTableHeader=()=> {
//    let header = Object.keys(this.state.students[0])

//    return header.map((key, index) => {
//       return <th key={index}>{key.toUpperCase()}</th>
//    })
// }
