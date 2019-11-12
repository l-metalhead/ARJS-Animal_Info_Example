AFRAME.registerComponent('my-event', {
    init: function () {
      let animal_plane_description = document.querySelector('#animalPlaneDesc');
      let animal_photo             = document.createElement('a-entity');

      animal_plane_description.setAttribute('rotation', '90 0 0');
      animal_plane_description.setAttribute('position', '0 0 -1.5');
      animal_plane_description.setAttribute('material', 'color: green; side: back;');
    }
});
