// MESSAGE INPUT
const textarea = document.querySelector('.chatbox-message-input')
const textarea1 = document.querySelector('#chatbox-message-input1')
const chatboxForm = document.querySelector('.chatbox-message-form')
const chatboxForm1 = document.querySelector('#chatbox-message-form1')

// ENTER SUBMIT
textarea.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#chatbox-message-submit").click();
  }
});

textarea1.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector("#chatbox-message-submit1").click();
  }
});


// CHATBOX MESSAGE
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxMessageWrapper1 = document.querySelector('#chatbox-message-content1')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')
const chatboxNoMessage1 = document.querySelector('#chatbox-message-no-message1')

chatboxForm.addEventListener('submit', function (e) {
	e.preventDefault()

	if(isValid(textarea.value)) {
		writeMessage()
		setTimeout(autoReply, 1000)
	}
})

chatboxForm1.addEventListener('submit', function (e) {
	e.preventDefault()

	if(isValid1(textarea1.value)) {
		writeMessage1()
		setTimeout(autoReply1, 1000)
	}
})



function addZero(num) {
	return num < 10 ? '0'+num : num
}

function writeMessage() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea.value.trim().replace(/\n/g, '<br>\n')}
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	chatboxForm.style.alignItems = 'center'
	textarea.rows = 1
	textarea.focus()
	textarea.value = ''
	chatboxNoMessage.style.display = 'none'
	scrollBottom()
}


function writeMessage1() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea1.value.trim().replace(/\n/g, '<br>\n')}
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper1.insertAdjacentHTML('beforeend', message)
	chatboxForm1.style.alignItems = 'center'
	textarea1.rows = 1
	textarea1.focus()
	textarea1.value = ''
	chatboxNoMessage1.style.display = 'none'
	scrollBottom()
}

function autoReply() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Ao acessar a Now, você concorda com os nossos termos de uso.
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	scrollBottom()
}

function autoReply1() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Ao acessar a Now, você concorda com os nossos termos de uso.
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper1.insertAdjacentHTML('beforeend', message)
	scrollBottom1()
}

function scrollBottom() {
	chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

function scrollBottom1() {
	chatboxMessageWrapper1.scrollTo(0, chatboxMessageWrapper1.scrollHeight)
}

function isValid(value) {
	let text = value.replace(/\n/g, '')
	text = text.replace(/\s/g, '')

	return text.length > 0
}

function isValid1(value) {
	let text = value.replace(/\n/g, '')
	text = text.replace(/\s/g, '')

	return text.length > 0
}



const btnBlock1 = document.querySelector('.blockBtn')
const newChat = document.querySelector('#otherone')

btnBlock1.addEventListener('click', () => {
	newChat.style.zIndex='1'
})


const thisChat = document.querySelector('#block')	

thisChat.addEventListener('click', () => {
	newChat.style.zIndex='-1'
})

setTimeout(() => {
	btnBlock1.style.display = 'flex'
}, 8000)
















