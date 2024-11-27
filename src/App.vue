<script >


export default{
  data(){
    return{

    }
  },
  methods:{
    redirect(){
      this.$router.push({name: 'home'})
    },
    back(){
      this.$router.go(-1)

    },
    forward(){
      this.$router.go(1)
    }
  }

}
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name: 'about'}">About</RouterLink>
        <RouterLink :to="{name: 'jobs'}">Jobs</RouterLink>
      </nav>
    </div>
    <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  </header>



  <RouterView />
</template>

<style >

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

@media (min-width: 1024px) {


  nav {
    text-align: center;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
