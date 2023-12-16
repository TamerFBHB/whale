in index.html  add font google
########################################
<!-- google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Playball&display=swap"
      rel="stylesheet"
    />

in file.jsx:
########################################

<div className="LogoT"> <h1>T</h1> </div>

in file.scss:
########################################
.LogoT {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 10px;

  border: 3px solid #0000;
  background: linear-gradient(var(--headerBar), var(--headerBar)) padding-box, 
              linear-gradient( var(--angle), #070707, #687aff) border-box;
  animation: 8s rotate linear infinite;
}
.LogoT h1 {
  margin: 0;
  font-size: 50px;
  font-family: 'Playball', cursive;
  color: var(--textHeader);
  text-shadow:var(--shadowText);
}
@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}