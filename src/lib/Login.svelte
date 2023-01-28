<script>
  import { createForm } from "svelte-forms-lib";
  import { user } from "./store";
  import axios from "axios";
  // @ts-ignore
  import * as yup from "yup";

  let API_URL = import.meta.env.VITE_API_URL;
  let isLoading = false;

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      isLoading = true;
      axios
        .post(`${API_URL}/api/login`, values)
        .then((result) => {
          isLoading = false;
          if (result.data.data) {
            let u = result.data.data["user"];
            user.set({id: u.id, username: u.username, email: u.email, api_key: u.api_key});
            // $user = {id: u.id, username: u.username, email: u.email, api_key: u.api_key};
            // newUser.update(() => {
            //  return 
            // });
            window.location.assign("/");
          } else {
            alert(result.data.error.msg);
          }
        })
        .catch((err) => {
          console.log(err.msg);
        });
    },
  });
</script>

<main class="parent">
  {#if !isLoading}
    <div class="form-container">
      <h2>Login</h2>
      <form on:submit={handleSubmit}>
        <input
          class="text"
          name="username"
          type="text"
          placeholder="username"
          on:change={handleChange}
          on:blur={handleChange}
          bind:value={$form.username}
        />

        {#if $errors.username}
          <small>{$errors.username}</small>
        {/if}

        <input
          class="text"
          name="password"
          type="password"
          placeholder="password"
          on:change={handleChange}
          on:blur={handleChange}
          bind:value={$form.password}
        />

        {#if $errors.username}
          <small>{$errors.password}</small>
        {/if}

        <button class="primary">Login</button><br />
        <a href="/signup">Don't have an account ?</a>
      </form>
    </div>
  {:else}
    <div class="loader">
      <div class="loaderBar">___</div>
    </div>
  {/if}
</main>

<style>
  .parent,
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .primary {
    background-color: black;
    color: white;
    margin-right: 6px;
  }

  .primary:hover {
    background-color: white;
    color: black;
    border-color: black;
    border-width: 1px;
  }

  .text {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 8px;
    box-sizing: border-box;
  }

  .loader {
    width: 500px;
    margin: 0 auto;
    border-radius: 10px;
    border: 4px solid transparent;
    position: relative;
    padding: 1px;
  }
  .loader:before {
    content: "";
    border: 1px solid #fff;
    border-radius: 10px;
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
  }
  .loader .loaderBar {
    position: absolute;
    border-radius: 10px;
    top: 0;
    right: 100%;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 0;
    animation: borealisBar 2s linear infinite;
  }

  @keyframes borealisBar {
    0% {
      left: 0%;
      right: 100%;
      width: 0%;
    }
    10% {
      left: 0%;
      right: 75%;
      width: 25%;
    }
    90% {
      right: 0%;
      left: 75%;
      width: 25%;
    }
    100% {
      left: 100%;
      right: 0%;
      width: 0%;
    }
  }
</style>
