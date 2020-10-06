// Email template for confirmation

// const url = process.env.NODE_ENV === 'production' ? process.env.hostedClientURL : 'localhost:3000';
const url = 'localhost:3000'

module.exports = {
  confirm: id => {
    const html = `
    <style>
      a {
        text-decoration: none;
        color: #FFFFFF !important;
        background-color: #6670ae;
          border-radius: 10px;
          border: 3px solid #6670ae;
        padding: 10px;
        font-weight: 400;
        margin: auto;
          text-transform: uppercase;
          text-align: center;
        display: block;
          font-family: "Roboto", Helvetica, Veranda, sans-serif;

      }
      a:hover {
        background-color: #acb4d5;
          border: 3px solid #acb4d5;
      }
      h1 {
        font-family: "Roboto", Helvetica, Veranda, sans-serif;
          text-align: center;
          border-bottom: 5px solid #1E1656;
          padding-bottom: 5px;
          color: #494949;
      }
      div {
        margin: auto;
      padding: 10px;
  }        
    </style>
    <div>
    <h1>Welcome to GuruKul!</h1>
        <a href='http://${url}/confirm/${id}'>
            click to confirm email
        </a>
  </div>
  `;
  
    return html;
  }
  
}