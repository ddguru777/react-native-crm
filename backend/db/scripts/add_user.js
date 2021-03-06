import { User, VkPerson } from "app/models"
import factory from "test/factory"

const vk_token = "TOKEN HERE"

const main = async () => {
  try {

    const user = await factory.create("user", {
      id: 1,
      name: "name",
      email: "email@email.com",
      password: "12345",
      vk_token,
    })

    const vkPersons = await VkPerson.findAll()

    const setUserId = async person => {
      person.set({ user_id: user.id })
      await person.save()
    }

    await Promise.all(vkPersons.map(setUserId))

  } catch (err) {
    console.log(err)
  }
}

main()
