<script>
  const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
  const season = seasons[Math.floor((new Date().getMonth() / 12 * 4)) % 4]
  console.log(season);
</script>

asdf