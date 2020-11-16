let annee;

for (annee = 2020; annee <= 2030; annee++) {

  if ((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0)){
      document.open();
      document.write('<p style="color:red">'+ annee +'</p>');
      document.close();
  }
  else{
      document.open();
      document.write("<p>"+ annee +"</p>");
      document.close();
  }

}